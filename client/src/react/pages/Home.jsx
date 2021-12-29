import AboutMe from "../components/AboutMe";

export default function Home (props) {
  return (
    <main id='home'>
      <AboutMe {...props}/>
    </main>
  )
}