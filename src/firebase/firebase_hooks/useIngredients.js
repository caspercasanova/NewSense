import {useState, useEffect} from 'react'
import {firestore} from '../firebase'

export default function useIngredients(id) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [ingredients, setIngredients] = useState([])

  useEffect(
    () => {
      const unsubscribe = firestore
        .collection('recipes')
        .doc(id)
        .collection('ingredients')        
        .onSnapshot(
          snapshot => {
            const ingredients = []            
            snapshot.forEach(doc => {              
              ingredients.push(doc)            
            })            
            setLoading(false)           
            setIngredients(ingredients)          
          }, 
          err => {
            setError(err)          
         })

      return () => unsubscribe()
    },
    [id]
  )

  return {
    error,
    loading,
    ingredients,
  }
}