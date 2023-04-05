import React from 'react'

const Notes = () => {
    return (
        <>
            <div className='placeholder col-6 p-5'>
                <div className="card text-center">
                    <div className="card-header">
                        Added Card
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Edit
                        </button>
                        <button className='btn btn-danger mx-2'>Remove</button>
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