import "./App.css";
import Accordian from "./component/accordian";
import ImageSlider from "./component/image-slider";
import RendomColor from "./component/rendom-color";
import StarRating from "./component/star-rating";
import ToDoList from "./component/toDoList";
import LoadMoreData from "./component/load-more-data";
import TreeView from "./component/tree-view";
import treeViewData from "./component/tree-view/data";
import QRCodeGenerator from "./component/qr-code-generator";
import LightDarkMode from "./component/light-dark-mode/index";
import ScrollIndicator from "./component/scroll-indicator/index";
import TabTest from "./component/custom-tabs/tab-test";
import ModalTest from "./component/custom-modal/modal-test";
import GithubProfileFinder from "./component/github-profile-finder";
import SearchAutocomplete from "./component/search-autocomplete-with-api/index";
import TicTactToe from "./component/tic-tact-toe";
import UseFetchHookTest from "./component/use-fetch/test";
import UseOutsideClickTest from "./component/use-outside-click/test";
import UseWindowResizeTest from "./component/use-window-resize/test";
import ScrollToTopAndToBottom from "./component/scroll-to-top-and-bottom";
import ScroolToSection from "./component/scroll-to-top-and-bottom/scroll-to-section";
import Weather from "./component/weather";

function App() {
  return (
    <div className="App">
      {/* <ToDoList />
      <StarRating numOfStars={10} />
      <Accordian />
      <RendomColor />
      <ImageSlider
        url="https://picsum.photos/v2/list"
        page={"1"}
        limit={"10"}
      /> 
      <LoadMoreData/>
      <TreeView list={treeViewData} />
      <QRCodeGenerator/>
      <LightDarkMode/>
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
      <TabTest/>
      <ModalTest/>
      <GithubProfileFinder/>
      <SearchAutocomplete/>
      <TicTactToe/> */}
      {/* <UseFetchHookTest/>  */}
      {/* <UseOutsideClickTest/> */}
      {/* <UseWindowResizeTest/>  */}
      {/* <ScrollToTopAndToBottom/> */}
      {/* <ScroolToSection/> */}
      {/* <Weather/> */}
    </div>
  );
}

export default App;
