import { useState, useEffect } from "react";
import DarkCard from "./DarkCard";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import "./PageContent.css";
import "./SortModsDropdown.css";
import { X } from 'lucide-react';

const PageContent = () => {
  const [cardsData, setCardsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedMods, setSelectedMods] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const categories = [
    "Minecraft But Mods & Plugins",
    "Trending Mods",
    "Best Value Mods",
    "Premium Plugins",
    "High Quality Maps"
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
    const fetchCardsData = async () => {
      try {
        const response = await axios.get(
          "https://craftifyproductions.com/api/posts/new-all-post"
        );
        setCardsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching card data:", error);
        setLoading(false);
      }
    };

    fetchCardsData();
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
            <DarkCard data={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageContent;
