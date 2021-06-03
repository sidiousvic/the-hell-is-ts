export const map =
  <T>(fn: Function) =>
  (list: T[]) => {
    const rMap = (idx: number) => (curr: T) => (acc: T[]) => {
      if (list[idx] === undefined) return acc;
      const nextIdx = idx + 1;
      const nextCurr = list[nextIdx];
      return rMap(nextIdx)(nextCurr)([...acc, fn(curr)]);
    };
    return rMap(0)(list[0])([]);
  };
