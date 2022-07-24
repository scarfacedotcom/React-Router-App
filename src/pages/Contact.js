import { useLocation } from "react-router-dom"

export default function Contact() {

  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")
  
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum veritatis quibusdam tenetur necessitatibus excepturi maiores delectus veniam, nulla explicabo quos?</p>
    </div>
  )
}
