import React from 'react'
import Workspaces from './Workspaces'

function WorkspacesContainer() {

    const workspaces = [
        'BB','Alissar','Jamalon'
    ]
    return (
        <Workspaces workspaces={workspaces} />
    )
}

export default WorkspacesContainer
