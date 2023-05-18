
import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";
import { Grocery } from "./components/Grocery";
import { Rating } from "./components/Rating";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";

import './App.css';

const groceryData = [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]

const imageGalleryData = [
  {
    "id": 1,
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "id": 2,
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "id": 3,
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "id": 4,
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "id": 5,
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
  {
    "id": 6,
    "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  }
]

export default function App() {
  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <h3>'Message' test</h3>
      <Message />
      <br />
      <h3>'FocusableInput' test</h3>
      <FocusableInput focusable={true}/>
      <br />
      <h3>'ImageGallery' test</h3>
      <ImageGallery links={imageGalleryData}/>
      <br />
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br />
      <h3>'TeamsList' test</h3>
      <TeamsList />
      <br />
      <h3>'Grocery' test</h3>
      <Grocery products={groceryData}/>
      <br />
      <h3>'Rating' test</h3>
      <Rating/>
      <br />
      <h3>'ListItemsForNavigation' test</h3>
      <ListItemsForNavigation/>
    </div>
  );
}
