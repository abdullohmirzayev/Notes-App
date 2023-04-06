const Form = ({ title, setTitle, desc, setDesc, notes, setNotes }) => {

    const inputHandler = (e) => {
        if (e.target.id === 'title') {
            setTitle(e.target.value)
        } else {
            setDesc(e.target.value)
        }
    }
    const addNotesHandler = (e) => {
        e.preventDefault()
        if (title !== '' && desc !== '') {
            return (
                setNotes((notes) => {
                    return (
                        [...notes, {
                            title: title,
                            desc: desc,
                            id: new Date().getTime()
                        }]
                    )
                })
            )
        }
        setTitle('');
        setDesc('')
    }

    return (
        <>
            <div className='placeholder col-6 p-5'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" placeholder='Enter Your Title' value={title} onChange={inputHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <textarea name='desc' id='desc' rows='3' className='form-control' placeholder='Enter Your Description' value={desc} onChange={inputHandler}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary py-3 px-5" onClick={addNotesHandler}>Add Notes</button>
                </form>
            </div>
        </>
    )
}

export default Form