import { useParams } from "react-router";


export default function DynamicChild() {
  const params = useParams();

  return <>I am dynamic {params.someId}</>;
}
