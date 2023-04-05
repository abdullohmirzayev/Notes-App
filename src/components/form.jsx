import React from 'react'

const Form = () => {
    return (
        <>
            <div className='placeholder col-6 p-5'>
                <form>
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" placeholder='Enter Your Title' />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea name='desc' id='desc' rows='3' className='form-control' placeholder='Enter Your Description'></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary py-3 px-5">Add Notes</button>
                    
                </form>
            </div>
        </>
    )
}

export default Form