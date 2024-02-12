import { useState } from 'react'
import './App.css'
import CommandLine from './components/CommandLine'
import GitTree from './components/GitTree'

function App() {

    const sectionDefault = {
        branch : false,
        merge : false,
        rebase : false,
        reset : false,
        revert : false,
        moving : false,
        cherry : false,
    }

    const [activeSection, setActiveSection] = useState(sectionDefault)

    return (
        <div style={{width:'800px'}}>
            <p>useful link : <a href="https://git-school.github.io/visualizing-git/">https://git-school.github.io/visualizing-git/</a></p>
            <br/>
            <h2 style={{cursor:'pointer'}} onClick={() => setActiveSection({...sectionDefault, branch : !activeSection.branch})}>Git Branch</h2>
            {activeSection.branch && <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
                <CommandLine>git branch newImage</CommandLine>
                <p>Create a newImage branch at the HEAD position.</p>
                <p>The HEAD doesn't get attached to the new branch.</p>
                <br/>
                {/*<p style={{display:'flex', justifyContent:'center', width:'100%'}}>C1 - - - C2 [main*] ={'>'} C1 - - - C2 [main* newImage] </p>*/}
                <img style={{border:'2px solid #848AE8'}} src="branch.png"/>
            </div>}
            {activeSection.branch && <br/>}
            {activeSection.branch && <div style={{padding:'1rem 0'}}>
                <CommandLine>git branch newImage</CommandLine>
                <CommandLine>git commit</CommandLine>
                <p>The HEAD is attached to MAIN.</p>
                <p>Create a newImage branch at the HEAD position.</p>
                <p>Add a commit : newImage doesn't move with the commit but MAIN & HEAD does.</p>
                <br/>
                <img style={{border:'2px solid #848AE8'}} src="branchcommit.png"/>
            </div>}
            {activeSection.branch && <br/>}
            {activeSection.branch && <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
                <CommandLine>git branch newImage</CommandLine>
                <CommandLine>git checkout newImage</CommandLine>
                <CommandLine>git commit</CommandLine>
                <p>The HEAD is attached to MAIN.</p>
                <p>Create a newImage branch at the HEAD position.</p>
                <p>The HEAD is attached to newImage.</p>
                <p>Add a commit : newImage follows the commit since the HEAD is on it.</p>
                <br/>
                <img style={{border:'2px solid #848AE8'}} src="branchcheckoutcommit.png"/>
            </div>}
            {activeSection.branch && <br/>}
            {activeSection.branch && <div>
                <CommandLine>git branch -d newImage</CommandLine>
                <p>Delete a branch.</p>
                <p>The commit can still be accessed / recovered even if they are not included in a branch anymore.</p>
                <br/>
                <GitTree>aaa{"=>"}bbb</GitTree>
            </div>}
            {activeSection.branch && <br/>}
            <hr/>
            <br/>
            <h2 style={{cursor:'pointer'}} onClick={() => setActiveSection({...sectionDefault, merge : !activeSection.merge})}>Git Merge</h2>
            {activeSection.merge && <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
                <CommandLine>git merge bugFix</CommandLine>
                <p>The HEAD is attached to MAIN.</p>
                <p>A new commit C4 appears below MAIN & MAIN moves to it.</p>
                <p>This new commit contains both C2 & C3.</p>
                <br/>
                <img style={{border:'2px solid #848AE8'}} src="merge.png"/>
            </div>}
            {activeSection.merge && <br/>}
            {activeSection.merge && <div style={{padding:'1rem 0'}}>
                <CommandLine>git checkout bugFix</CommandLine>
                <CommandLine>git merge main</CommandLine>
                <p>The HEAD moves & attaches itself to bugFix.</p>
                <p>bugFix is an ancestor of C4 so when merging, bugFix moves to C4.</p>
                <p>bugFix now contains C1, C2, C3 & C4.</p>
                <br/>
                <img style={{border:'2px solid #848AE8'}} src="merge2.png"/>
            </div>}
            {activeSection.merge && <br/>}
            <hr/>
            <br/>
            <h2 style={{cursor:'pointer'}} onClick={() => setActiveSection({...sectionDefault, rebase : !activeSection.rebase})}>Git Rebase</h2>
            {activeSection.rebase && <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
                <CommandLine>git rebase main</CommandLine>
                <p>The HEAD is attached to bugFix.</p>
                <p>A copy of the bugFix current commit is placed under the current MAIN commit.</p>
                <br/>
                <img style={{border:'2px solid #848AE8'}} src="rebase.png"/>
            </div>}
            {activeSection.rebase && <br/>}
            {activeSection.rebase && <div style={{padding:'1rem 0'}}>
                <CommandLine>git rebase bugFix</CommandLine>
                <p>The HEAD is attached to MAIN.</p>
                <p>MAIN moves to include C3'.</p>
                <p>Equivalent to git merge bugFix.</p>
                <br/>
                <img style={{border:'2px solid #848AE8'}} src="rebase2.png"/>
            </div>}
            {activeSection.rebase && <br/>}
            {activeSection.rebase && <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
                <CommandLine>git rebase -i HEAD~3</CommandLine>
                <p>The HEAD is attached to MAIN on C3.</p>
                <p>Via the UI : omit C1 and reordering of C2 & C3 from C0 (HEAD~3).</p>
                <br/>
                <img style={{border:'2px solid #848AE8'}} src="rebasei.png"/>
            </div>}
            {activeSection.rebase && <br/>}
            <hr/>
            <br/>
            <h2 style={{cursor:'pointer'}} onClick={() => setActiveSection({...sectionDefault, moving : !activeSection.moving})}>Moving the HEAD</h2>
            {activeSection.moving && <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
                <CommandLine>git checkout C1</CommandLine>
                <p>Move the HEAD to C1.</p>
                <br/>
                <GitTree>aaa{"=>"}bbb</GitTree>
            </div>}
            {activeSection.moving && <br/>}
            {activeSection.moving && <div style={{padding:'1rem 0'}}>
                <CommandLine>git checkout main~2</CommandLine>
                <p>Move the HEAD two commits behind MAIN.</p>
                <br/>
                <GitTree>aaa{"=>"}bbb</GitTree>
            </div>}
            {activeSection.moving && <br/>}
            {activeSection.moving && <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
                <CommandLine>git branch -f main HEAD~2</CommandLine>
                <p>the HEAD is on bugFix.</p>
                <p>MAIN & bugFix are on C3.</p>
                <p>Move MAIN to C1.</p>
                <br/>
                <GitTree>aaa{"=>"}bbb</GitTree>
            </div>}
            {activeSection.moving && <br/>}
            <hr/>
            <br/>
            <h2 style={{cursor:'pointer'}} onClick={() => setActiveSection({...sectionDefault, reset : !activeSection.reset})}>Git Reset</h2>
            {activeSection.reset && <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
                <CommandLine>git reset HEAD~1</CommandLine>
                <p>Move one commit back.</p>
                <p>Soft delete the commit where the HEAD was.</p>
                <p>A new anonymous branch will be created to put the next new commit.</p>
                <br/>
                <img style={{border:'2px solid #848AE8'}} src="reset.png"/>
            </div>}
            {activeSection.reset && <br/>}
            <hr/>
            <br/>
            <h2 style={{cursor:'pointer'}} onClick={() => setActiveSection({...sectionDefault, revert : !activeSection.revert})}>Git Revert</h2>
            {activeSection.revert && <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
                <CommandLine>git revert HEAD</CommandLine>
                <p>Create a new commit cloning the commit right before the head.</p>
                <br/>
                <img style={{border:'2px solid #848AE8'}} src="revert.png"/>
            </div>}
            {activeSection.revert && <br/>}
            <hr/>
            <br/>
            <h2 style={{cursor:'pointer'}} onClick={() => setActiveSection({...sectionDefault, cherry : !activeSection.cherry})}>Git Cherry-Pick</h2>
            {activeSection.cherry && <div style={{backgroundColor:'#c7ddf0', padding:'1rem 0'}}>
                <CommandLine>git cherry-pick C2 C4</CommandLine>
                <p>The HEAD is on MAIN.</p>
                <p>Makes a copy of C2 & C4 and put them right after the HEAD.</p>
                <p>the HEAD & MAIN are moved to the copy of C4.</p>
                <br/>
                <GitTree>aaa{"=>"}bbb</GitTree>
            </div>}
            <br/>
        </div>
    )
}

export default App
