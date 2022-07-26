import './About.css'

export default function About() {

  return (
    <section id="about-wrapper">
      <div className="about-container">
        <ul role='list' className="leaf">
          {[...Array(3)].map((x, i) => <img key={i} src="https://magicofcolors.eu/wp-content/uploads/2019/07/logo-leaf-new.png" alt="leaf" />)}
        </ul>
        <section id="about-us">
          <article className="about-us-content">
            <h2 className="title">Garden plant ideas </h2>
            <h5 className="about-description">
              Time to put our garden plant ideas into practice
            </h5>
            <h3 className="subtitle first">Start With a Plan</h3>
            <img className="description-first" src="https://i.pinimg.com/originals/5e/c1/9d/5ec19d0154afc0b316bbf5a98a59672a.jpg" alt="Our Mission" />
            <p className="description-first">
              Choosing plants is one the most important steps in any new garden design or outdoor space transformation and the
              right garden plant ideas for your space will depend on a multitude of different factors. From knowing how much
              room you have, to understanding your garden's aspect, the different soil types and the look you want to create,
              of course, there's lots of exciting stuff to consider when forming your planting scheme.
            </p>
            <p className="description-first"> From colorful patio plants, to flowers that will still bloom on a small and shady balcony, to the perfect
              perennials for an urban outdoor space, take a look at our practical guide on how to perfect your planting
              scheme.</p>
            <h3 className="subtitle second">Make a Wish List</h3>
            <img className="description-second" src="https://gardenvarietynews.files.wordpress.com/2014/02/flower-garden-linden-hill-gardens-1.jpg" alt="Our Goals" />
            <p className="description-second">
              Time to put our garden plant ideas into practice.If you already have flower beds, note the successful plants and fill in the blank spots with the colors, heights, foliage, and bloom time you will need to get the desired look. This will help guide you when you are plant shopping. If you know that your garden lacks color after July 4th, you can limit your choices to later blossoming plants instead of buying more spring bloomers.
            </p>
            <p className="description-second">
              Be sure to make the most of what you've got already. Don't try to change a dry, rocky spot into a vegetable garden. Instead, use it for a rock garden planted with sedums and hen and chicks, which can thrive in the tough conditions.
            </p>
          </article>
          <ul role='list' className="leaf">
            {[...Array(3)].map((x, i) => <img key={i} src="https://magicofcolors.eu/wp-content/uploads/2019/07/logo-leaf-new.png" alt="leaf" />)}
          </ul>
        </section>
        <section id="about">
          <article className="about-advice">
            <img className="picture1"
              src="https://roamnewroads.ca/wp-content/uploads/2016/05/shutterstock_380327833-1050x700.jpg"
              alt="garden-1"
            />
            <section className="content">
              <h2 className="content-title">
                How do I plan my garden layout?
              </h2>
              <h5 className="content-subtitle">
                Make a Planting Strategy
              </h5>
              <ul className="content-list" role="list">
                <li>
                  <i className="fa-regular fa-bell"></i>
                  Analyze your existing garden space
                </li>
                <li>
                  <i className="fa-regular fa-bell"></i>
                  Plan for what you want and need
                </li>
                <li>
                  <i className="fa-regular fa-bell"></i>
                  Sketch out your initial design
                </li>
                <li>
                  <i className="fa-regular fa-bell"></i>
                  Consider the main elements of landscape design
                </li>
                <li>
                  <i className="fa-regular fa-bell"></i>
                  Familiarize yourself with garden design costs
                </li>
                <li>
                  <i className="fa-regular fa-bell"></i>
                  Then set the budget for your garden design
                </li>
                <li>
                  <i className="fa-regular fa-bell"></i>
                  Consider garden maintenance
                </li>
                <li>
                  <i className="fa-regular fa-bell"></i>
                  Check if your garden design requires a permit
                </li>
              </ul>
            </section>
            <section className="perfect">
              <h3 className="perfect-title">
                Things You Need to Know About Plants
              </h3>
              <article className="perfect-content">
                <article className="perfect-content-card">
                  <img src="https://www.gardenia.net/public/images/pf-img-1.png" alt="type" />
                  <p>Plant Type</p>
                </article>
                <article className="perfect-content-card">
                  <img src="https://www.gardenia.net/public/images/pf-img-3.png" alt="lite" />
                  <p>Light Levels</p>
                </article>
                <article className="perfect-content-card">
                  <img src="https://www.gardenia.net/public/images/pf-img-5.png" alt="water" />
                  <p>Water Needs</p>
                </article>
                <article className="perfect-content-card">
                  <img src="https://www.gardenia.net/public/images/pf-img-4.png" alt="season" />
                  <p>Season</p>
                </article>
                <article className="perfect-content-card">
                  <img src="https://www.gardenia.net/public/images/pf-img-6.png" alt="soil" />
                  <p>Maintenance</p>
                </article>
                <article className="perfect-content-card">
                  <img src="https://www.gardenia.net/public/images/pf-img-2.png" alt="color" />
                  <p>Height and color</p>
                </article>
              </article>
            </section>
            <img className="picture2" src="https://www.daviddomoney.com/wp-content/uploads/2020/01/Japanese-water-irises.jpg " alt="garden-2" />
          </article>
        </section>
        <ul role='list' className="leaf">
          {[...Array(3)].map((x, i) => <img key={i} src="https://magicofcolors.eu/wp-content/uploads/2019/07/logo-leaf-new.png" alt="leaf" />)}
        </ul>
      </div>
    </section>
  );
}