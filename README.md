CODING ADVENTURE

1.  ¿Cuándo tengo que usar useCallback()?
    Cuándo defino una función y quiero que se vuelva a definir sólo cunadio haya cambios en la propia función.
    Caso concreto de usarla sería cuando se pasan las funciones por props, así al estar memoizada la función con el nuevo cambio no se redefiniría.
