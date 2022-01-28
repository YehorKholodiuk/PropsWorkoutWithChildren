import Header from './Header'
import Menu from "./Menu";
import Card from "./Card";

function App() {
  const appName = 'Alpha';
  const secret = 'e478485856';
  const metaInfo = {
      auth: 'johhommkk88',
      name:'Beta',
      price:'545',
  }
  const menu = [
      {
          link:'/qwe',
          title:'Home'
      },
      {
          link:'/service',
          title:'services'
      },
      {
          link:'./about',
          title:'About'
      },
  ]

  return (
    <div >
<Header name={appName} version={'1.03.45'} secret={secret} metaInfo={metaInfo} menu={menu}/>
        <hr/>
        <Menu menu={menu}/>
        <hr/>
        <Card>
            <strong>Card1 </strong>
        </Card>
        <Card>
           <h2>Card2 </h2>
            <Menu menu={menu}/>
        </Card>
    </div>
  );
}

export default App;
