import './App.css'
import CommandLine from './components/CommandLine'
import GitTree from './components/GitTree'

function App() {

  return (
    <div style={{width:'800px'}}>
      <p>useful link : https://git-school.github.io/visualizing-git/</p>
      <br/>
      <h2>Git Branch</h2>
      <CommandLine>git branch newImage</CommandLine>
      <p>Create a newImage branch at the HEAD position.</p>
      <p>The HEAD doesn't get attached to the new branch.</p>
      <br/>
      {/*<p style={{display:'flex', justifyContent:'center', width:'100%'}}>C1 - - - C2 [main*] ={'>'} C1 - - - C2 [main* newImage] </p>*/}
      <GitTree>C1 - - - C2 [main*]{"=>"}C1 - - - C2 [main* newImage]</GitTree>
      <br/>
      <CommandLine>git branch newImage</CommandLine>
      <CommandLine>git commit</CommandLine>
      <p>The HEAD is attached to MAIN.</p>
      <p>Create a newImage branch at the HEAD position.</p>
      <p>Add a commit : newImage doesn't move with the commit but MAIN & HEAD does.</p>
      <br/>
      <GitTree>C1 - - - C2 [main*]{"=>"}C1 - - - C2 [newImage] - - - C3 [main*]</GitTree>
      <br/>
      <CommandLine>git branch newImage</CommandLine>
      <CommandLine>git checkout newImage</CommandLine>
      <CommandLine>git commit</CommandLine>
      <p>The HEAD is attached to MAIN.</p>
      <p>Create a newImage branch at the HEAD position.</p>
      <p>The HEAD is attached to newImage.</p>
      <p>Add a commit : newImage follows the commit since the HEAD is on it.</p>
      <br/>
      <GitTree>C1 - - - C2 [main*]{"=>"}C1 - - - C2 [main] - - - C3 [newImage*]</GitTree>
      <br/>
      <h2>Git Merge</h2>
      <CommandLine>git merge bugFix</CommandLine>
      <p>The HEAD is attached to MAIN.</p>
      <p>MAIN moves to a new commit.</p>
      <p>This new commit contains C2 & C3.</p>
      <br/>
      <GitTree>aaa{"=>"}bbb</GitTree>
      <br/>
      <CommandLine>git checkout bugFix</CommandLine>
      <CommandLine>git merge main</CommandLine>
      <p>The HEAD moves & attaches itself to bugFix.</p>
      <p>bugFix is an ancestor of C4 so when merging, bugFix moves to C4.</p>
      <p>bugFix now contains C1, C2, C3 & C4.</p>
      <br/>
      <GitTree>aaa{"=>"}bbb</GitTree>
      <br/>
      <h2>Git Rebase</h2>
      <CommandLine>git rebase main</CommandLine>
      <p>The HEAD is attached to bugFix.</p>
      <p>A copy of the bugFix current commit is placed under the current MAIN commit.</p>
      <br/>
      <GitTree>aaa{"=>"}bbb</GitTree>
      <br/>
      <CommandLine>git rebase bugFix</CommandLine>
      <p>The HEAD is attached to MAIN.</p>
      <p>MAIN moves to include C3'.</p>
      <p>Equivalent to git merge bugFix.</p>
      <br/>
      <GitTree>aaa{"=>"}bbb</GitTree>
      <br/>
      test
    </div>
  )
}

export default App
