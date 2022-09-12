import { useState } from "react";
import { AddCategories } from "./components/AddCategories";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState([ 'One Piece' ]);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes( newCategory ) ) return;

    setCategories([ newCategory, ...categories ]);
  }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategories
            onNewCategory= { (event) => onAddCategory ( event ) }
        />   
             { 
             categories.map( ( category ) => (
                <GifGrid 
                  key={ category } 
                  category={ category }
                />
              ))
            }
    </>
  );
}


