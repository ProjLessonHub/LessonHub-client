import React from 'react'
import { Typography } from '@material-ui/core'
import Modal from './modal'



const ViewLesson = ({ closeModal, lesson }) => {

    return (
        <Modal
            open={true}
            onClose={() => closeModal()}
            title={lesson.title}
        >
            <div style={{ width: '550px', height: '600px', overflow: 'auto' }}>
                <Typography gutterBottom variant="h6" component="h2">
                    {lesson.description}
                </Typography>
                <div style={{ height: '200px' }}>{lesson.notes}</div>


            </div>
            <Typography gutterBottom component="h6">
                <div style={{ display: 'flex' }}>Author: {lesson.first} {lesson.last}</div>
                <div style={{ display: 'flex' }}>Need a tutor? Ask for help
                <a style={{ marginLeft: '4px' }} href={`mailto:${lesson.email}`}>{lesson.email}</a>
                    <span style={{ marginLeft: '4px' }}>{lesson.phone}</span>
                </div>
            </Typography>
        </Modal >
    )
}

export default ViewLesson