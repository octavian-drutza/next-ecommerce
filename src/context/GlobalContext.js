import React, { createContext, useContext, useReducer } from "react";
import { globalReducer } from "../reducers";

export const initialState = {
  products: [
    {
      id: "1",
      name: "Lego City 1",
      price: "345",
      description:
        "Protect the citizens of LEGO® City with the incredible 60216 Downtown Fire Brigade set, featuring a large fire ladder truck with new for January 2019 working light and sound brick, extending swivel ladder and fire hose with new-for January-2019",
      image: "/1.jpg",
      images: [
        {
          src: "/1.jpg",
          alt: "first image",
        },
        {
          src: "/8.jpg",
          alt: "second image",
        },
/*         {
          src: "/9.jpg",
          alt: "third image",
        }, */
/*         {
          src: "/10.jpg",
          alt: "forth image",
        }, */
        {
          src: "/11.jpg",
          alt: "fifth image",
        },
        {
            src: "/7.jpg",
            alt: "sixth image",
        },
      ],
      details: {
        pieceQty: "45",
        age: "12",
        inStock: "yes",
        shipmentPrice: "45",
      },
    },
    {
      id: "2",
      name: "Lego City 2",
      price: "34",
      description:
        "Protect the citizens of LEGO® City with the incredible 60216 Downtown Fire Brigade set, featuring a large fire ladder truck with new for January 2019 working light and sound brick, extending swivel ladder and fire hose with new-for January-2019",
      image: "/2.jpg",
      images: [
        {
          src: "/2.jpg",
          alt: "first image",
        },
        {
          src: "/8.jpg",
          alt: "second image",
        },
/*         {
          src: "/9.jpg",
          alt: "third image",
        }, */
/*         {
          src: "/10.jpg",
          alt: "forth image",
        }, */
        {
          src: "/11.jpg",
          alt: "fifth image",
        },
        {
            src: "/7.jpg",
            alt: "sixth image",
        },
      ],
      details: {
        pieceQty: "45",
        age: "12",
        inStock: "yes",
        shipmentPrice: "45",
      },
    },
    {
      id: "3",
      name: "Lego City 3",
      price: "3",
      description:
        "Protect the citizens of LEGO® City with the incredible 60216 Downtown Fire Brigade set, featuring a large fire ladder truck with new for January 2019 working light and sound brick, extending swivel ladder and fire hose with new-for January-2019",
      image: "/3.jpg",
      images: [
        {
          src: "/3.jpg",
          alt: "first image",
        },
/*         {
          src: "/8.jpg",
          alt: "second image",
        }, */
/*         {
          src: "/9.jpg",
          alt: "third image",
        }, */
        {
          src: "/10.jpg",
          alt: "forth image",
        },
        {
          src: "/11.jpg",
          alt: "fifth image",
        },
        {
            src: "/7.jpg",
            alt: "sixth image",
        },
      ],
      details: {
        pieceQty: "45",
        age: "12",
        inStock: "no",
        shipmentPrice: "445",
      },
    },
    {
      id: "4",
      name: "Lego City 4",
      price: "3",
      description:
        "Protect the citizens of LEGO® City with the incredible 60216 Downtown Fire Brigade set, featuring a large fire ladder truck with new for January 2019 working light and sound brick, extending swivel ladder and fire hose with new-for January-2019",
      image: "/4.jpg",
      images: [
        {
          src: "/4.jpg",
          alt: "first image",
        },
/*         {
          src: "/8.jpg",
          alt: "second image",
        }, */
/*         {
          src: "/9.jpg",
          alt: "third image",
        }, */
        {
          src: "/10.jpg",
          alt: "forth image",
        },
        {
          src: "/11.jpg",
          alt: "fifth image",
        },
        {
            src: "/7.jpg",
            alt: "sixth image",
        },
      ],
      details: {
        pieceQty: "45",
        age: "12",
        inStock: "yes",
        shipmentPrice: "445",
      },
    },
    {
      id: "5",
      name: "Lego City 5",
      price: "3",
      description:
        "Protect the citizens of LEGO® City with the incredible 60216 Downtown Fire Brigade set, featuring a large fire ladder truck with new for January 2019 working light and sound brick, extending swivel ladder and fire hose with new-for January-2019",
      image: "/5.jpg",
      images: [
        {
          src: "/5.jpg",
          alt: "first image",
        },
/*         {
          src: "/8.jpg",
          alt: "second image",
        }, */
/*         {
          src: "/9.jpg",
          alt: "third image",
        }, */
        {
          src: "/10.jpg",
          alt: "forth image",
        },
        {
          src: "/11.jpg",
          alt: "fifth image",
        },
        {
            src: "/7.jpg",
            alt: "sixth image",
        },
      ],
      details: {
        pieceQty: "45",
        age: "12",
        inStock: "no",
        shipmentPrice: "545",
      },
    },
    {
      id: "6",
      name: "Lego City 6",
      price: "3",
      description:
        "Protect the citizens of LEGO® City with the incredible 60216 Downtown Fire Brigade set, featuring a large fire ladder truck with new for January 2019 working light and sound brick, extending swivel ladder and fire hose with new-for January-2019",
      image: "/6.jpg",
      images: [
        {
          src: "/6.jpg",
          alt: "first image",
        },
/*         {
          src: "/8.jpg",
          alt: "second image",
        }, */
        {
          src: "/9.jpg",
          alt: "third image",
        },
/*         {
          src: "/10.jpg",
          alt: "forth image",
        }, */
        {
          src: "/11.jpg",
          alt: "fifth image",
        },
        {
            src: "/7.jpg",
            alt: "sixth image",
        },
      ],
      details: {
        pieceQty: "45",
        age: "16",
        inStock: "yes",
        shipmentPrice: "452",
      },
    },
  ],
  cart: [],
  wishlist: [],
};

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

function useGlobalState() {
  const context = useContext(GlobalStateContext);

  if (context === undefined) {
    throw new Error("useGlobalState must be used inside GlobalProvider");
  }

  return context;
}

function useGlobalDispatch() {
  const context = useContext(GlobalDispatchContext);

  if (context === undefined) {
    throw new Error("useGlobalDispatch must be used inside GlobalProvider");
  }

  return context;
}

export const useGlobal = () => [useGlobalState(), useGlobalDispatch()];

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
