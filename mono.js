const main = (targets) => {
  const x1000 = [6, 6, 9];

  const x1 = [10, 8, 12];
  const x5 = [9, 8, 4];
  const x10 = [9, 8, 6];
  const x20 = [7, 3, 5];

  const firstmove = { x1: x1[0], x5: x5[0], x10: x10[0], x20: x20[0] };
  const secondmove = { x1: x1[1], x5: x5[1], x10: x10[1], x20: x20[1] };
  const thirdmove = { x1: x1[2], x5: x5[2], x10: x10[2], x20: x20[2] };

  for (let target of targets) {
    for (let a in firstmove) {
      if (firstmove[a] + x1000[0] === target) {
        console.log(`${target} can be done on the second move by with ${a}`);
      }
      for (let b in secondmove) {
        if (firstmove[a] + secondmove[b] + x1000[1] === target) {
          console.log(
            `${target} can be done on the third move by with ${a}-${b}`
          );
        }
        for (let c in thirdmove) {
          if (
            firstmove[a] + secondmove[b] + thirdmove[c] + x1000[2] ===
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
