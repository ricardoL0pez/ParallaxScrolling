import './App.css'
import starts from './assets/starts.svg';
import moon from './assets/moon.png';
import mountains_behind from './assets/mountains_behind.png';
import mountains_front from './assets/mountains_front.png';

function App() {
  

  return (
    <>
      <header>
        <a href="#" class="logo">Logo</a>
        <ul>
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </header>
    <section>
       <img src={starts} alt="starts" id="starts"/>
       <img src={moon} alt="moon" id="moon"/>
       <img src={mountains_behind} alt="mountains" id="mountains_behind"/>
       <h2 id="text">Moon Light</h2>
       <a href="#sec" id="btn">Explore</a>
       
       
       <img src={mountains_front} alt="mountains" id="mountains_front"/>
    </section>
    <div class="paragraph" id="sec">
    <h2>Parallax Scrollig Effects</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta perspiciatis, saepe eveniet unde perferendis doloremque est nobis odio quo quasi accusantium placeat! Eaque molestias amet doloribus labore nostrum suscipit recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae possimus, similique obcaecati perferendis pariatur totam quaerat nostrum iste, eum officiis quae. Repellendus, iusto excepturi pariatur alias mollitia porro? Minima, accusamus. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ex vitae, beatae ducimus accusantium eum excepturi fugit distinctio quisquam sunt a porro voluptatem dicta libero! Repellat fugiat tempora facilis eum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit ipsam omnis, aliquid eveniet nihil, saepe enim fugiat numquam aperiam necessitatibus provident, expedita ut et. Ipsa temporibus eaque nihil animi rem.<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione error placeat magni, iusto dolor? Voluptatem, nam maiores, reprehenderit cum facere porro dolorum consequuntur dicta reiciendis ipsa, aliquid beatae nobis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam blanditiis, quod quia accusamus fugiat sed ratione ab nam aliquam, sequi architecto error ducimus saepe dolore fuga in aliquid ea praesentium?</p>
</div>
    </>
  )
}

export default App
