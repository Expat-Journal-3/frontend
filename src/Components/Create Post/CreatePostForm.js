import React from 'react';

function CreatePostForm(props){
    const{
        value,
        onSubmit,
        onInputChange,
        disabled,
    } = props
    return(
        <div>
            <form onSubmit={onSubmit}>
                <h2>New Post</h2>
                <div className='newPostPhoto'>
                    <label>Add Image
                        <input
                            value={value.image}
                            onChange={onInputChange}
                            name='image'
                            type='image'
                            alt={value.alt}
                        />
                    </label>
                </div>
                <div className='newPostDetails'>
                    <label>Description
                        <input
                            value={value.description}
                            onChange={onInputChange}
                            name='description'
                            type='text'
                        />
                    </label>

                    <label>Location
                        <input
                            value={value.location}
                            onChange={onInputChange}
                            name='location'
                            type='text'
                        />
                    </label>
                </div>
                <button disabled={disabled}>Save</button>
                <button disabled={disabled}>Cancel</button>
            </form>
        </div>
    )
}

export default CreatePostForm;
