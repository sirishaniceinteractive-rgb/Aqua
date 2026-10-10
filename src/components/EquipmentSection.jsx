import React from 'react';

export const EquipmentSection = () => {
  const items = [
    {
      category: 'OPTICS & SAFETY',
      name: 'Masks & Snorkels',
      image: './images/equipment/gear_mask.jpg',
      desc: 'Panoramic masks featuring UltraClear tempered lenses, hypoallergenic silicone skirts, and an ultra-wide undistorted field of vision.',
    },
    {
      category: 'THERMAL DEFENSE',
      name: 'Premium Wetsuits',
      image: './images/equipment/gear_suit.jpg',
      desc: 'Elite anatomical neoprene suits by Scubapro and Mares in 3mm, 5mm, and 7mm thicknesses tailored for any water temperature profile.',
    },
    {
      category: 'BREATHING SYSTEMS',
      name: 'Tanks & Regulators',
      image: './images/equipment/gear_tanks.jpg',
      desc: '12L and 15L steel/aluminum tanks with filtered air and Nitrox, paired with balanced environmentally sealed Apeks cold-water regulators.',
    },
    {
      category: 'FACILITIES & TRAINING',
      name: 'Training Complex',
      image: './images/equipment/gear_training.jpg',
      desc: 'Private 5-meter deep-water training basin for skill mastery, high-capacity Bauer compressor station, and climate-controlled gear storage.',
    },
  ];

  return (
    <section id="equipment" className="equipment-section">
      <div className="container">
        <div style={{ maxWidth: '750px' }}>
          <span className="section-tag">GEAR & FACILITIES</span>
          <h2 className="section-title">Facilities & Equipment</h2>
          <div className="pink-divider" />
          <p style={{ color: '#C4D9F0', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.7 }}>
            Aqua Sphere Club is outfitted with top-tier equipment from world-leading manufacturers.
            All gear undergoes rigorous certified servicing every 50 dives to ensure absolute safety.
          </p>
        </div>

        <div className="equipment-grid">
          {items.map((item, index) => (
            <div key={index} className="equipment-card">
              <div className="equipment-img-wrap">
                <img src={item.image} alt={item.name} className="equipment-img" loading="lazy" />
              </div>
              <div className="equipment-content">
                <span className="equipment-category">{item.category}</span>
                <h3 className="equipment-name">{item.name}</h3>
                <p className="equipment-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
