import React from "react";

import { createAction } from "../../Context";

export default function Teste() {
  const store = createAction("teste").type;
  return <div>{console.log(store)}</div>;
}
