for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("foobar");
  }
  if (i % 3 == 0) {
    console.log("foo");
  } else if (i % 5 == 0) {
    console.log("bar");
  }
  console.log(i);
}
