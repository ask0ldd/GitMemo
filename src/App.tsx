import './App.css'
import CommandLine from './components/CommandLine'
import GitTree from './components/GitTree'

function App() {

  return (
    <div style={{width:'800px'}}>
      <p>useful link : https://git-school.github.io/visualizing-git/</p>
      <br/>
      <h2>Git Branch</h2>
      <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
          <CommandLine>git branch newImage</CommandLine>
          <p>Create a newImage branch at the HEAD position.</p>
          <p>The HEAD doesn't get attached to the new branch.</p>
          <br/>
          {/*<p style={{display:'flex', justifyContent:'center', width:'100%'}}>C1 - - - C2 [main*] ={'>'} C1 - - - C2 [main* newImage] </p>*/}
          <img style={{border:'2px solid #848AE8'}} src="branch.png"/>
      </div>
      <br/>
      <div style={{padding:'1rem 0'}}>
          <CommandLine>git branch newImage</CommandLine>
          <CommandLine>git commit</CommandLine>
          <p>The HEAD is attached to MAIN.</p>
          <p>Create a newImage branch at the HEAD position.</p>
          <p>Add a commit : newImage doesn't move with the commit but MAIN & HEAD does.</p>
          <br/>
          <img style={{border:'2px solid #848AE8'}} src="branchcommit.png"/>
      </div>
      <br/>
      <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
          <CommandLine>git branch newImage</CommandLine>
          <CommandLine>git checkout newImage</CommandLine>
          <CommandLine>git commit</CommandLine>
          <p>The HEAD is attached to MAIN.</p>
          <p>Create a newImage branch at the HEAD position.</p>
          <p>The HEAD is attached to newImage.</p>
          <p>Add a commit : newImage follows the commit since the HEAD is on it.</p>
          <br/>
          <img style={{border:'2px solid #848AE8'}} src="branchcheckoutcommit.png"/>
      </div>
      <br/>
      <CommandLine>git branch -d newImage</CommandLine>
      <p>Delete a branch.</p>
      <p>The commit can still be accessed / recovered even if they are not included in a branch anymore.</p>
      <br/>
      <GitTree>aaa{"=>"}bbb</GitTree>
      <br/>
      <hr/>
      <br/>
      <h2>Git Merge</h2>
      <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
          <CommandLine>git merge bugFix</CommandLine>
          <p>The HEAD is attached to MAIN.</p>
          <p>A new commit C4 appears below MAIN & MAIN moves to it.</p>
          <p>This new commit contains both C2 & C3.</p>
          <br/>
          <img style={{border:'2px solid #848AE8'}} src="merge.png"/>
      </div>
      <br/>
      <div style={{padding:'1rem 0'}}>
          <CommandLine>git checkout bugFix</CommandLine>
          <CommandLine>git merge main</CommandLine>
          <p>The HEAD moves & attaches itself to bugFix.</p>
          <p>bugFix is an ancestor of C4 so when merging, bugFix moves to C4.</p>
          <p>bugFix now contains C1, C2, C3 & C4.</p>
          <br/>
          <img style={{border:'2px solid #848AE8'}} src="merge2.png"/>
      </div>
      <br/>
      <hr/>
      <br/>
      <h2>Git Rebase</h2>
      <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
          <CommandLine>git rebase main</CommandLine>
          <p>The HEAD is attached to bugFix.</p>
          <p>A copy of the bugFix current commit is placed under the current MAIN commit.</p>
          <br/>
          <img style={{border:'2px solid #848AE8'}} src="rebase.png"/>
      </div>
      <br/>
      <div style={{padding:'1rem 0'}}>
          <CommandLine>git rebase bugFix</CommandLine>
          <p>The HEAD is attached to MAIN.</p>
          <p>MAIN moves to include C3'.</p>
          <p>Equivalent to git merge bugFix.</p>
          <br/>
          <img style={{border:'2px solid #848AE8'}} src="rebase2.png"/>
      </div>
      <br/>
      <hr/>
      <br/>
      <h2>Moving the HEAD</h2>
      <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
          <CommandLine>git checkout C1</CommandLine>
          <p>Move the HEAD to C1.</p>
          <br/>
          <GitTree>aaa{"=>"}bbb</GitTree>
      </div>
      <br/>
      <div style={{padding:'1rem 0'}}>
          <CommandLine>git checkout main~2</CommandLine>
          <p>Move the HEAD two commits behind MAIN.</p>
          <br/>
          <GitTree>aaa{"=>"}bbb</GitTree>
      </div>
      <br/>
      <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
          <CommandLine>git branch -f main HEAD~2</CommandLine>
          <p>the HEAD is on bugFix.</p>
          <p>MAIN & bugFix are on C3.</p>
          <p>Move MAIN to C1.</p>
          <br/>
          <GitTree>aaa{"=>"}bbb</GitTree>
      </div>
      <br/>
      <hr/>
      <br/>
      <h2>Git Reset</h2>
      <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
          <CommandLine>git reset HEAD~1</CommandLine>
          <p>Move one commit back.</p>
          <p>Soft delete the commit where the HEAD was.</p>
          <p>A new anonymous branch will be created to put the next new commit.</p>
          <br/>
          <img style={{border:'2px solid #848AE8'}} src="reset.png"/>
      </div>
      <br/>
      <hr/>
      <br/>
      <h2>Git Revert</h2>
      <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
          <CommandLine>git revert HEAD</CommandLine>
          <p>Create a new commit cloning the commit right before the head.</p>
          <br/>
          <GitTree>aaa{"=>"}bbb</GitTree>
      </div>
      <br/>
      <hr/>
      <br/>
      <h2>Git Cherry-Pick</h2>
      <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
          <CommandLine>git cherry-pick C2 C4</CommandLine>
          <p>The HEAD is on MAIN.</p>
          <p>Makes a copy of C2 & C4 and put them right after the HEAD.</p>
          <p>the HEAD & MAIN are moved to the copy of C4.</p>
          <br/>
          <GitTree>aaa{"=>"}bbb</GitTree>
      </div>
      <br/>
    </div>
  )
}

export default App
