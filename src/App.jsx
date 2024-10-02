import { useDispatch, useSelector } from "react-redux";
import AlbumPage from "./pages/albums";
import Alert from '../src/ui-kit/alert'
import { useEffect } from "react";
import { close } from "./redux/slices/alertSlice";



function App() {
  const dispatch = useDispatch();

  const accessToken = localStorage.getItem("rssaAuth");

  // const alertOpen = useSelector((state) => state.alert.view);
  const is_error = useSelector((state) => state.alert.error);
  const desc = useSelector((state) => state.alert.desc);
  const errorinfo = useSelector((state) => state.alert.errorinfo);
  const alerts = useSelector((state) => state.alert.alerts);

  const alertId = useSelector((state) => state.alert.index);

  // const [menuOpen, setMenuOpen] = useState();

  // useEffect(() => {
  //   setMenuOpen(localStorage.getItem("menuOpen"));
  // });
  // useEffect(() => {
  //   if (alerts?.length > 0) {
  //     alerts.forEach((alert, index) => {
  //       setTimeout(() => {
  //         dispatch(close(index));
  //         console.log(`Automatically closed alert`);
  //       }, 10000);
  //     });
  //   }
  // }, [alerts]);

  useEffect(() => {
    console.log("alerts", JSON.stringify(alerts));
  }, [alerts]);

  useEffect(() => {
    console.log("alerts", JSON.stringify(alerts));
    console.log("createAlert", alertId);
    setTimeout(() => {
      dispatch(close(alertId));
      console.log(`Automatically closed alert with index ${alertId}`);
    }, 10000);
  }, [alertId]);

  // useEffect(()=>{
  //   console.log("api", process.env.REACT_APP_API_URL)
  // },[])
  return (
    <div className="App">
      <div className="alertblock">
                {alerts?.map((item, index) => (
                  <Alert
                    error={item?.error}
                    desc={item?.desc}
                    errorinfo={item?.errorinfo}
                    index={item?.id}
                  />
                ))}
              </div>
      <AlbumPage/>
    </div>
  );
}

export default App;
