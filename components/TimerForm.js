import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, View, Text, TextInput } from 'react-native';

import TimerButton from './TimerButton';

const TimerForm = (props) => {
    const { id, title: myTitle, project: myProject, onFormClose, onFormSubmit } = props

    const [title, setTitle] = useState(id ? myTitle : '')
    const [project, setProject] = useState(id ? myProject : '')

    const handleTitleChange = (title) => {
        setTitle(title)
    }

    const handleProjectChange = (project) => {
        setProject(project)
    }

    const handleSubmit = () => {
        onFormSubmit({
            id,
            title,
            project
        })
    }

    const submitText = id ? 'Update' : 'Create';

    return (
        <View style={styles.formContainer}>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Title</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        value={title}
                        onChangeText={handleTitleChange}
                    />
                </View>
            </View>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Project</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        value={project}
                        onChangeText={handleProjectChange}
                    />
                </View>
            </View>
            <View style={styles.buttonGroup}>
                <TimerButton
                    small
                    color="#21BA45"
                    title={submitText}
                    onPress={handleSubmit}
                />
                <TimerButton
                    small
                    color="#DB2828"
                    title="Cancel"
                    onPress={onFormClose}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'white',
        borderColor: '#D6D7DA',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    attributeContainer: {
        marginVertical: 8,
    },
    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5,
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
    },
    textInputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

TimerForm.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    project: PropTypes.string,
    onFormSubmit: PropTypes.func.isRequired,
    onFormClose: PropTypes.func.isRequired,
}

TimerForm.defaultProps = {
    id: null,
    title: '',
    project: '',
}

export default TimerForm;