import React from 'react';
export default class TimerForm extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        project: PropTypes.string,
        onFormSubmit: PropTypes.func.isRequired,
        onFormClose: PropTypes.func.isRequired,
    };

    static defaultProps = {
        id: null,
        title: '',
        project: '',
    };

    constructor(props) {
        super(this.props);
        const { id, title, project } = props;
        this.state = {
            title: id ? title : '',
            project: id ? project : '',
        };
    }

    handleSubmit = () => {
        const { onFormSubmit, id } = this.props;
        const { title, project } = this.state;
        onFormSubmit({
            id,
            title,
            project,
        });
    };

    handleTitleChange = title => {
        this.setState({ title });
    };
    handleProjectChange = project => {
        this.setState({ project });
    };
    render() {
        const { id, onFormClose } = this.props;
        const { title, project } = this.state;
        const submitText = id ? 'Update' : 'Create';
        return (
              <View style={styles.formContainer}>
              <View style={styles.attributeContainer}>
              <Text style={styles.textInputTitle}>Title</Text>
              <View style={styles.textInputContainer}>
                 <TextInput
                   style={styles.textInput}
                   underlineColorAndroid="transparent"
                   onChangeText={this.handleTitleChange}
                   value={title}/>
                   </View>
               </View>
               <View style={styles.attributeContainer}>
               <Text style={styles.textInputTitle}>Project</Text>
               <View style={styles.textInputContainer}>
               <TextInput
                   style={styles.textInput}
                   underlineColorAndroid="transparent"
                   onChangeText={this.handleProjectChange}
                   value={project}/>
                    </View>
                </View>
                <View style={styles.buttonGroup}>
                    <TimerButton
                        small
                        color="#21BA45"
                        title={submitText}
                        onPress={this.handleSubmit}/>
                    <TimerButton
                        small
                        color="#DB2828"
                        title="Cancel"
                        onPress={onFormClose}/>
                </View>
            </View>
        );
    }
}