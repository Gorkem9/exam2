function* range(start, end) {
    for (let h = start; h <= end; h++) {
    yield h;
    }
    }
    for (h of range(1, 1000)) {
         if ((h%3!=0) && (h%5==0))
    console.log(h);
    }