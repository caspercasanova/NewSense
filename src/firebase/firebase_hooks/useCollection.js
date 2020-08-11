import {useState, useEffect} from 'react'
import {firestore} from '../firebase'


/* 
Pass in whatever collection we want
*/
export default function useCollection(collection) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

 // when the collection attribute changes (including mount)
  // subscribe to the collection
  useEffect(() => {
    const unsubscribe = firestore
    .collection(collection)
    .onSnapshot((snapshot) => {
      const collectionDocs = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      setData(collectionDocs)
        
    }, () => { // second arg for on snapshot is an error callback

      setError(true)
    });

    setLoading(false)
    // returning the unsubscribe function will ensure that we unsubscribe from document 
    return () => unsubscribe()
  }, [collection])


  return {
    error, 
    loading,
    data
  }
}
