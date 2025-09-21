import { useState, useEffect } from "react";
import DarkCard from "./DarkCard";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import "./PageContent.css";
import "./SortModsDropdown.css";
import { X } from 'lucide-react';
import { Link } from "react-router-dom";
import custom_button_image from "../../images/order_button.png";

const PageContent = () => {
  const [cardsData, setCardsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedMods, setSelectedMods] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [settings, setSettings] = useState({
    customButtonEnabled: true,
    customButtonText: "Ordering Custom Mod is now possible because our team is available!"
  });

  const categories = [
    "Minecraft But Mods & Plugins",
    "Trending Mods",
    "Best Value Mods",
    "Premium Plugins",
    "High Quality Maps",
    "New Models"
  ];

  const options = [
    "Oneblocks",
    "Tycoons",
    "Troll videos",
    "Evolution",
    "Horror Mods",
    "Base Mods",
    "Custom Abilities",
    "Hearts Mod",
    "Trending Maps",
    "Crazy Mods",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch both posts and settings
        const [postsResponse, settingsResponse] = await Promise.all([
          axios.get("https://craftifyproductions.com/api/posts/new-all-post"),
          axios.get("https://craftifyproductions.com/api/settings")
        ]);
        
        setCardsData(postsResponse.data);
        setSettings(settingsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const shuffleCards = () => {
    const shuffled = [...cardsData];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCardsData(shuffled);
  };

  const toggleMod = (mod) => {
    setSelectedMods((prev) =>
      prev.includes(mod) ? prev.filter((m) => m !== mod) : [...prev, mod]
    );
    setShowMenu(false);
  };

  const removeMod = (mod) => {
    setSelectedMods((prev) => prev.filter((m) => m !== mod));
  };

  const filteredCards = cardsData.filter((card) => {
    const cardTitle = card.title || "";
    const cardDescription = card.description || "";
    const cardOptions = card.options || [];

    // Category and search term filtering
    const matchesCategory = !selectedCategory || card.category === selectedCategory;
    const matchesSearch = cardTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cardDescription.toLowerCase().includes(searchTerm.toLowerCase());

    // Options filtering
    const matchesOptions = selectedMods.length === 0 || // If no options selected, show all
      selectedMods.some(selectedMod => cardOptions.includes(selectedMod));

    return matchesCategory && matchesSearch && matchesOptions;
  });

  if (loading) {
    return  <div className="loading-container">
Loading.....
  </div>;
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center flex-column mb-3">
        <div className="mb-3" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {settings.customButtonEnabled && (
            <Link to="/contact"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              style={{ display: 'inline-block' }}
            >
              <img src={custom_button_image} alt="Contact" style={{ cursor: 'pointer', maxWidth: '250px', width: '100%' }} />
            </Link>
          )}
          {showTooltip && settings.customButtonEnabled && (
            <div style={{
              position: 'absolute',
              top: '-42px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#222',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              fontSize: '1rem',
              zIndex: 10,
              whiteSpace: 'nowrap',
            }}>
              {settings.customButtonText}
            </div>
          )}
        </div>
        <div className="col search-and-shuffle">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search here.."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={shuffleCards} className="btn shuffle-btn">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/shuffle-3d-icon-download-in-png-blend-fbx-gltf-file-formats--game-play-dice-music-arrow-button-pack-user-interface-icons-9147825.png?f=webp"
              alt=""
            />
          </button>
        </div>
        <div className="sort-mods-container">
          <Dropdown show={showMenu} onToggle={() => setShowMenu(!showMenu)}>
            <Dropdown.Toggle variant="outline-primary" className="sort-mods-btn">
              Sort Mods
            </Dropdown.Toggle>

            <Dropdown.Menu className="sort-mods-menu">
              {options.map((mod) => (
                <div
                  key={mod}
                  className="sort-mods-option"
                  onClick={() => toggleMod(mod)}
                >
                  <input
                    type="checkbox"
                    checked={selectedMods.includes(mod)}
                    readOnly
                  />
                  <span>{mod}</span>
                </div>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <div className="selected-mods">
            {selectedMods.map((mod) => (
              <span key={mod} className="mod-pill">
                {mod}
                <X className="mod-remove" onClick={() => removeMod(mod)} />
              </span>
            ))}
          </div>
        </div>
        <div className="btn-group mobile-style" role="group">
          {categories.map((category, index) => (
            <button
              key={index}
              type="button"
              className={`btn mobile-btn-gap ${
                selectedCategory === category
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="row">
        {filteredCards.map((card, index) => (
          <div className="col-md-3" key={index}>
            <DarkCard data={card} settings={settings} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageContent;
