import {useState, useEffect} from 'react'
import {firestore} from '../firebase'


/* 
Hooks are useful for monitoring individual 
document queries using firestore. In this 
example, we want to fetch a recipe when 
provided an id. We’ll want to provide our 
components with error, loading, and recipe state.
*/
export default function useRecipe(id) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState(null);

 // when the id attribute changes (including mount)
  // subscribe to the recipe document and update
  // our state when it changes.
  useEffect(() => {
    const unsubscribe = firestore
    .collection('recipes')
    .doc(id)
    .onSnapshot(
      doc => {
        setLoading(false)
        setRecipe(doc)
      }, 
      err => {
        setError(err)
      }
    )
    // returning the unsubscribe function will ensure that
      // we unsubscribe from document changes when our id
      // changes to a different value.
    return () => unsubscribe()
  }, [id])


  return {
    error, 
    loading,
    recipe
  }
}
