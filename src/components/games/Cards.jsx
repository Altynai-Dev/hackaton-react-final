import { useState } from "react";
import Card from "./Card";

function Cards() {
  const [items, setItems] = useState(
    [
      {
        id: 1,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQzrmSfO5Oa7EpjRgcvr5R0F-0yTvWElf36NWlpMeyOCmg4dkv33xHovUKnRCoNuBF9RGowv652Ao8sfMyfhQvimGmquK1JXvSdLmga2aePMnNWRM336LuiGkinK6hftey1FFzWGmfYYyrm4YiFFZZdMsdkQONQ77LJBU7cj97Ds5MpRQH8BCuYWm-_K-cVRC81hJgZUq_65UsvltefwoM0cocJUO5KH-_0PwR7bGR8vrx91kVuQOpXEvrsPVqwtXoVLD8fKvRfUNzHs0ZUw9mpPAv5SXeVGPeddfACQOe9JL-_DZJ5K8BrSBjtk9geH5XMKXIXM_VBrkIWcwxo.jpg?r=0f1",
        stat: "",
      },
      {
        id: 1,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQzrmSfO5Oa7EpjRgcvr5R0F-0yTvWElf36NWlpMeyOCmg4dkv33xHovUKnRCoNuBF9RGowv652Ao8sfMyfhQvimGmquK1JXvSdLmga2aePMnNWRM336LuiGkinK6hftey1FFzWGmfYYyrm4YiFFZZdMsdkQONQ77LJBU7cj97Ds5MpRQH8BCuYWm-_K-cVRC81hJgZUq_65UsvltefwoM0cocJUO5KH-_0PwR7bGR8vrx91kVuQOpXEvrsPVqwtXoVLD8fKvRfUNzHs0ZUw9mpPAv5SXeVGPeddfACQOe9JL-_DZJ5K8BrSBjtk9geH5XMKXIXM_VBrkIWcwxo.jpg?r=0f1",
        stat: "",
      },
      {
        id: 2,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeInYNFYDoiyDX3bvma7uQJ-9Hsvwq59576EkLCwYLHMArZ6JlPHPK7SPxlAgmGPv3lcmii7Ui97HGChKeSDE-ZX2Oh170fDVw1p8e8-UK44CBozqcwO9xoPz6ZErqpPG6yk.jpg?r=07e",
        stat: "",
      },
      {
        id: 2,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeInYNFYDoiyDX3bvma7uQJ-9Hsvwq59576EkLCwYLHMArZ6JlPHPK7SPxlAgmGPv3lcmii7Ui97HGChKeSDE-ZX2Oh170fDVw1p8e8-UK44CBozqcwO9xoPz6ZErqpPG6yk.jpg?r=07e",
        stat: "",
      },
      {
        id: 3,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRr7X8QbRXABDQiiHViOY5OoCxxNgSwa2xDXcqnqpztkd4beVuaLzudOkixYYd9q9vB2G9Y2BZ_0BMJb4wBGNa-VGzbxgv94vYKHPAgNNEtiHZyleN2f_l5wCzEWh2-kQHj4.jpg?r=4cb",
        stat: "",
      },
      {
        id: 3,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRr7X8QbRXABDQiiHViOY5OoCxxNgSwa2xDXcqnqpztkd4beVuaLzudOkixYYd9q9vB2G9Y2BZ_0BMJb4wBGNa-VGzbxgv94vYKHPAgNNEtiHZyleN2f_l5wCzEWh2-kQHj4.jpg?r=4cb",
        stat: "",
      },
      {
        id: 4,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ-Ja7Ss41I1baDtrnot6BMIlghpRHD4qPZurf1H82U04XzxCGvJppnzzE61alsqBiL4r7rGXDEY6PnRdQtvxT9ybcUlgwuFhAwcIzedlZ_ml-iGbqW7Yv4zBGP-L1B57qwb.jpg?r=0d2",
        stat: "",
      },
      {
        id: 4,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ-Ja7Ss41I1baDtrnot6BMIlghpRHD4qPZurf1H82U04XzxCGvJppnzzE61alsqBiL4r7rGXDEY6PnRdQtvxT9ybcUlgwuFhAwcIzedlZ_ml-iGbqW7Yv4zBGP-L1B57qwb.jpg?r=0d2",
        stat: "",
      },
      {
        id: 5,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXkYSFaA6W7Icp2Uba2A-hw2I71QnTKdF6itlKZvCNNmnIQWhkgbZqcE8mOHAUI2qwp9CoAGd_qMlncZPSIo2MkrfCze0kM7qaw.webp?r=1ae",
        stat: "",
      },
      {
        id: 5,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXkYSFaA6W7Icp2Uba2A-hw2I71QnTKdF6itlKZvCNNmnIQWhkgbZqcE8mOHAUI2qwp9CoAGd_qMlncZPSIo2MkrfCze0kM7qaw.webp?r=1ae",
        stat: "",
      },
      {
        id: 6,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYcKxOtDTOqygbIoG6iZxnfN112d1mfzw1TIUgkFYT2Mml_W2Ry4kXF8hwaqMs_gkOQXPdIV8sVtuAG3xfWz5UgOOnH-203wvaY.webp?r=14f",
        stat: "",
      },
      {
        id: 6,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYcKxOtDTOqygbIoG6iZxnfN112d1mfzw1TIUgkFYT2Mml_W2Ry4kXF8hwaqMs_gkOQXPdIV8sVtuAG3xfWz5UgOOnH-203wvaY.webp?r=14f",
        stat: "",
      },
      {
        id: 7,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQklZKQllbm6bPtcjABA82MKLUpJScBw50nGgxnbLMAkYWOSFNo9hgR2YbttHZ7jFiXY_f1uj7jWx1Mj4fU_XXdnCSHAFJ9avmM.webp?r=412",
        stat: "",
      },
      {
        id: 7,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQklZKQllbm6bPtcjABA82MKLUpJScBw50nGgxnbLMAkYWOSFNo9hgR2YbttHZ7jFiXY_f1uj7jWx1Mj4fU_XXdnCSHAFJ9avmM.webp?r=412",
        stat: "",
      },
      {
        id: 8,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ6FN_PbvCHiAwVJJ0VGsb2I-J_5rR-Z9ayPXY4mAp0aeOt3TRmICR4Fc9BIAcXecIEfYG3iFYxO7AmE2zSOkEp2plkEn7RocOB093Ig4WiOkcwx2VuEnx_dYbJGlR1KkciG.jpg?r=8db",
        stat: "",
      },
      {
        id: 8,
        img: "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZ6FN_PbvCHiAwVJJ0VGsb2I-J_5rR-Z9ayPXY4mAp0aeOt3TRmICR4Fc9BIAcXecIEfYG3iFYxO7AmE2zSOkEp2plkEn7RocOB093Ig4WiOkcwx2VuEnx_dYbJGlR1KkciG.jpg?r=8db",
        stat: "",
      },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;
