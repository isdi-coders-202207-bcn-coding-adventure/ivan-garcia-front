CODING ADVENTURE

1.  ¿Cuándo tengo que usar useCallback()?
    Cuándo defino una función y quiero que se vuelva a definir sólo cunadio haya cambios en la propia función.
    Uso concreto cuán necesito meter ésta función en un array de dependencias, por ejemplo cuando uso useEffect, uso el useCallback para asegurarme que no re redefina.
