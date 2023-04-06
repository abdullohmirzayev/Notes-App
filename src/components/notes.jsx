import React from 'react'

const Notes = ({element, notes, setNotes}) => {
    const removeHandler = (id) => {
        const newNotes = notes.filter((elm) => {
            if(elm.id !== id) {
                return elm;
            }
        })
        setNotes(newNotes)
    }
    const editHandler = (id) => {
        notes.filter((elm)=> {
            if(elm.id === id) {
                document.getElementById('edittitle').value=elm.title;
                document.getElementById('editdesc').value=elm.desc;
            }
        })
    }
    return (
        <>
            <div className='placeholder col-6 p-5'>
                <div className="card text-center text-capitalize">
                    <div className="card-header">
                        Added Card
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{element.title}</h5>
                        <p className="card-text">{element.desc}</p>
                        <button type="submet" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                            editHandler(element.id)
                        }}>
                            Edit
                        </button>
                        <button className='btn btn-danger mx-2' onClick={() => {
                            removeHandler(element.id)
                        }}>Remove</button>
                    </div>
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes