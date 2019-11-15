export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async
    const firestore = getFirestore()
    firestore.collection('projects').add({
      ...project,
      autuorFirstName: 'firstname',
      authorLastHane: 'lastname',
      authorId: 12345,
      createdAt: new Date()
    })
      .then(res => {
        dispatch({type: 'CREATE_PROJECT', project})
      }).catch((err) => {
        dispatch({type: 'CREATE_PROJECT_ERROR', err})
      })

  }
}

export default createProject