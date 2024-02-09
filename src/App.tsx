import './App.css'
import CommandLine from './components/CommandLine'

function App() {

  return (
    <div style={{width:'800px'}}>
      <h2>Git Branch</h2>
      <CommandLine>git branch newImage</CommandLine>
      <p>Create a newImage branch at the HEAD position.</p>
      <p>The HEAD doesn't get attached to the new branch.</p>
      <br/>
      <p style={{display:'flex', justifyContent:'center', width:'100%'}}>C1 - - - C2 [main*] ={'>'} C1 - - - C2 [main* newImage] </p>
      <br/>
      <CommandLine>git branch newImage</CommandLine>
      <CommandLine>git commit</CommandLine>
      <p>The HEAD is attached to MAIN.</p>
      <p>Create a newImage branch at the HEAD position.</p>
      <br/>
      <p style={{display:'flex', justifyContent:'center', width:'100%'}}>C1 - - - C2 [main*] ={'>'} C1 - - - C2 [newImage] - - - C3 [main*] </p>
    </div>
  )
}

export default App