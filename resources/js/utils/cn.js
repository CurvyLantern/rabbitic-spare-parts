import { twMerge } from "tailwind-merge";

const cn = (oldCls, newCls) => twMerge(oldCls, newCls);

export default cn;
