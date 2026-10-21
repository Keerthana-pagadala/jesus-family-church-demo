import { useState } from 'react'

/* =========================
   LOAD PHOTOS FROM FOLDERS
   ========================= */

const batticoaloaPhotos = Object.values(
  import.meta.glob('../assets/gallery/batticoaloa/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const bennyPhotos = Object.values(
  import.meta.glob('../assets/gallery/benny/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const colomboPhotos = Object.values(
  import.meta.glob('../assets/gallery/colombo/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const eastLankaPhotos = Object.values(
  import.meta.glob('../assets/gallery/east-lanka/*', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const gethsemanePhotos = Object.values(
  import.meta.glob('../assets/gallery/getsemane/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const jesusLivesPhotos = Object.values(
  import.meta.glob('../assets/gallery/jesus lives/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const joelThomasrajPhotos = Object.values(
  import.meta.glob('../assets/gallery/joel thomasraj/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const parisZionPhotos = Object.values(
  import.meta.glob('../assets/gallery/paris-zion/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const roshanPhotos = Object.values(
  import.meta.glob('../assets/gallery/roshan/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const sarangapanyPhotos = Object.values(
  import.meta.glob('../assets/gallery/sarangapany/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const smyrnaPhotos = Object.values(
  import.meta.glob('../assets/gallery/smyrna/*', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

const zionPhotos = Object.values(
  import.meta.glob('../assets/gallery/zion/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)

/* =========================
   ALBUMS
   ========================= */

function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null)

  const albums = [
    {
      title:
        'Ministering at East Lanka Evangelical Mission in Batticaloa, Sri Lanka',
      name: 'East Lanka Evangelical Mission',
      location: 'Batticaloa, Sri Lanka',
      photoCount: eastLankaPhotos.length,
      cover: eastLankaPhotos[0],
      photos: eastLankaPhotos,
    },

    {
      title:
        'Ministering at Evangelical Church of Zion Ministry in Paris, France',
      name: 'Evangelical Church of Zion Ministry',
      location: 'Paris, France',
      photoCount: parisZionPhotos.length,
      cover: parisZionPhotos[0],
      photos: parisZionPhotos,
    },

    {
      title:
        'Ministering at Gethsemane Gospel Church in Batticaloa, Sri Lanka',
      name: 'Gethsemane Gospel Church',
      location: 'Batticaloa, Sri Lanka',
      photoCount: gethsemanePhotos.length,
      cover: gethsemanePhotos[0],
      photos: gethsemanePhotos,
    },

    {
      title:
        'Ministering at Jesus Hand Revival Ministries in Colombo, Sri Lanka',
      name: 'Jesus Hand Revival Ministries',
      location: 'Colombo, Sri Lanka',
      photoCount: colomboPhotos.length,
      cover: colomboPhotos[0],
      photos: colomboPhotos,
    },

    {
      title: 'Ministering at Jesus Lives in Colombo, Sri Lanka',
      name: 'Jesus Lives Ministry',
      location: 'Colombo, Sri Lanka',
      photoCount: jesusLivesPhotos.length,
      cover: jesusLivesPhotos[0],
      photos: jesusLivesPhotos,
    },

    {
      title:
        'Ministering at Prayer House in Batticaloa, Sri Lanka',
      name: 'Prayer House Ministry',
      location: 'Batticaloa, Sri Lanka',
      photoCount: batticoaloaPhotos.length,
      cover: batticoaloaPhotos[0],
      photos: batticoaloaPhotos,
    },

    {
      title:
        'Ministering at Smyrna Church in Galle, Sri Lanka',
      name: 'Smyrna Church',
      location: 'Galle, Sri Lanka',
      photoCount: smyrnaPhotos.length,
      cover: smyrnaPhotos[0],
      photos: smyrnaPhotos,
    },

    {
      title:
        'Ministering at Zion Church in Jaffna, Sri Lanka',
      name: 'Zion Church',
      location: 'Jaffna, Sri Lanka',
      photoCount: zionPhotos.length,
      cover: zionPhotos[0],
      photos: zionPhotos,
    },

    {
      title:
        'Revival Meeting with Pastor Joel Thomasraj at Jesus Family Church Australia',
      name: 'Revival Meeting with Pastor Joel Thomasraj',
      location: 'Jesus Family Church Australia',
      photoCount: joelThomasrajPhotos.length,
      cover: joelThomasrajPhotos[0],
      photos: joelThomasrajPhotos,
    },

    {
      title:
        'Revival Meeting with Pastor Roshan Mahesan at Jesus Family Church Australia',
      name: 'Revival Meeting with Pastor Roshan Mahesan',
      location: 'Jesus Family Church Australia',
      photoCount: roshanPhotos.length,
      cover: roshanPhotos[0],
      photos: roshanPhotos,
    },

    {
      title:
        'Revival Meeting with Pastor Benny Joshua at Jesus Family Church Australia',
      name: 'Revival Meeting with Pastor Benny Joshua',
      location: 'Jesus Family Church Australia',
      photoCount: bennyPhotos.length,
      cover: bennyPhotos[0],
      photos: bennyPhotos,
    },

    {
      title:
        'Revival Meeting with Rev. J. J. Sarangapany at Jesus Family Church Australia',
      name: 'Revival Meeting with Rev. J. J. Sarangapany',
      location: 'Jesus Family Church Australia',
      photoCount: sarangapanyPhotos.length,
      cover: sarangapanyPhotos[0],
      photos: sarangapanyPhotos,
    },
  ]

  /* =========================
     SELECTED ALBUM
     ========================= */

  if (selectedAlbum) {
    return (
      <div className="gallery-page">

        <section className="gallery-hero">
          <div className="gallery-hero-overlay">
            <div className="gallery-hero-content">
              <p>JESUS FAMILY CHURCH AUSTRALIA</p>
              <h1>Gallery</h1>
            </div>
          </div>
        </section>

        <main>
          <section className="gallery-album-view">

            <button
              className="gallery-back-button"
              onClick={() => setSelectedAlbum(null)}
            >
              ← Back to Gallery
            </button>

            <div className="gallery-album-heading">

              <span className="gallery-section-label">
                {selectedAlbum.photoCount} PHOTOS
              </span>

              <h2>{selectedAlbum.name}</h2>

              <p>{selectedAlbum.title}</p>

              <div className="gallery-location">
                📍 {selectedAlbum.location}
              </div>

            </div>

            <div className="gallery-grid">

              {selectedAlbum.photos.map((photo, index) => (
                <div
                  className="gallery-grid-item"
                  key={index}
                >
                  <img
                    src={photo}
                    alt={`${selectedAlbum.name} - Photo ${index + 1}`}
                  />
                </div>
              ))}

            </div>

            <div className="gallery-more-moments">

              <span>MORE MINISTRY MOMENTS</span>

              <h3>
                Thank You for Being Part of Our Journey
              </h3>

              <button
                onClick={() => setSelectedAlbum(null)}
                className="gallery-back-button"
              >
                ← View All Albums
              </button>

            </div>

          </section>
        </main>

      </div>
    )
  }

  /* =========================
     MAIN GALLERY
     ========================= */

  return (
    <div className="gallery-page">

      <section className="gallery-hero">

        <div className="gallery-hero-overlay">

          <div className="gallery-hero-content">

            <p>JESUS FAMILY CHURCH AUSTRALIA</p>

            <h1>Gallery</h1>

          </div>

        </div>

      </section>

      <section className="gallery-intro">

        <div className="gallery-intro-content">

          <span className="gallery-section-label">
            OUR MINISTRY JOURNEY
          </span>

          <h2>
            Moments We <span>Share Together</span>
          </h2>

          <p>
            From worship services and revival meetings to ministry journeys
            around the world, these moments reflect God's faithfulness and
            the beautiful fellowship we share as a church family.
          </p>

        </div>

      </section>

      <section className="gallery-albums">

        <div className="gallery-albums-grid">

          {albums.map((album, index) => (

            <article
              className="gallery-album-card"
              key={index}
            >

              <div className="gallery-album-image">

                {album.cover ? (
                  <img
                    src={album.cover}
                    alt={album.name}
                  />
                ) : (
                  <div className="gallery-image-placeholder">
                    <span>
                      Jesus Family Church Australia
                    </span>
                  </div>
                )}

                <div className="gallery-photo-count">
                  {album.photoCount} Photos
                </div>

              </div>

              <div className="gallery-album-content">

                <span className="gallery-album-location">
                  {album.location}
                </span>

                <h3>{album.name}</h3>

                <p>{album.title}</p>

                <button
                  onClick={() => setSelectedAlbum(album)}
                  className="gallery-view-button"
                >
                  View Gallery →
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>

      <section className="gallery-bottom">

        <span>YOU ARE WELCOME</span>

        <h2>
          Come and Be Part of Our Story
        </h2>

        <p>
          We would love to welcome you into our church family.
          Come worship, fellowship and grow with us.
        </p>

        
<a href="/ministries" className="primary-button">
  Explore Our Ministries →
</a>


      </section>

    </div>
  )
}

export default Gallery