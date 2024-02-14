const main = (targets) => {
  const x100 = [6, 6, 9];

  const x1 = [10, 8, 12];
  const x2 = [9, 8, 4];
  const x3 = [9, 8, 6];
  const x5 = [7, 3, 5];

  const firstmove = { x1: x1[0], x2: x2[0], x3: x3[0], x5: x5[0] };
  const secondmove = { x1: x1[1], x2: x2[1], x3: x3[1], x5: x5[1] };
  const thirdmove = { x1: x1[2], x3: x3[2], x3: x3[2], x5: x5[2] };

  for (let target of targets) {
    for (let a in firstmove) {
      if (firstmove[a] + x100[0] === target) {
        console.log(`${target} can be done on the second move by with ${a}`);
      }
      for (let b in secondmove) {
        if (firstmove[a] + secondmove[b] + x100[1] === target) {
          console.log(
            `${target} can be done on the third move by with ${a}-${b}`
          );
        }
        for (let c in thirdmove) {
          if (
            firstmove[a] + secondmove[b] + thirdmove[c] + x100[2] ===
            target
          ) {
            console.log(
              `${target} can be done on the fourth move by with ${a}-${b}-${c}`
            );
          }
        }
      }
    }
  }
};

main([10, 17, 20, 30, 31]);
