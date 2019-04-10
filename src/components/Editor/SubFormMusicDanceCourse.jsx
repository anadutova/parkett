import React from 'react';
import PropTypes from 'prop-types';
import { fetchAll } from '../../utils/FetchFunctions';
import FormDJ from './FormDJ';
import FormBand from './FormBand';
import FormDanceCourse from './FormDanceCourse';
import InputFormSelect from './InputFormSelect';
import InputFormMultipleSelect from './InputFormMultipleSelect';

class SubFormMusicDanceCourse extends React.Component {
    constructor() {
        super();
        this.state = {
            addSelected: null,
            danceCourses: [],
            bands: [],
            djs: [],
        };
    }

    componentDidMount() {
        this.fetchBands();
        this.fetchDjs();
        this.fetchDances();
        this.fetchDanceTeachers();
        this.fetchDanceCourses();
    }

    fetchDanceCourses = () => {
        fetchAll('dance_courses').then((myJson) => {
        this.setState({ danceCourses: myJson });
        });
    }

    fetchDances = () => {
        fetchAll('dances').then((myJson) => {
            this.setState({ dances: myJson });
        });
    }

    fetchBands = async () => {
        fetchAll('bands').then((myJson) => {
            this.setState({ bands: myJson });
        });
    }

    fetchDjs = async () => {
        fetchAll('djs').then((myJson) => {
            this.setState({ djs: myJson });
        });
    }

    fetchDanceTeachers = async () => {
        fetchAll('dance_teachers').then((myJson) => {
            this.setState({ dance_teachers: myJson });
        });
    }

    getTeacherName = (id, dance_id) => {
        const { dance_teachers, dances } = this.state;
        if (!dance_teachers || !dances) return 'loading...';
        const dance_teacher = dance_teachers.find(teacher => teacher.id === id);
        const danceObj = dances.find(dance => dance.id === dance_id);
        return (dance_teacher && danceObj) ? `${dance_teacher.name} ${danceObj.name}` : 'undefined';
    }

    close = () => {
        this.setState({ addSelected: null });
    }

    addNewElement(name) {
        this.setState({ addSelected: name });
    }

    render() {
        const {
            selectedForm, form, handleChange, dance_course_id, handleMultiple, bandids, djids,
        } = this.props;
        const {
            addSelected,
        } = this.state;
        const { danceCourses, djs, bands } = this.state;
        return (
            <div>
                <InputFormSelect
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleChange}
                    value={dance_course_id}
                    name="dance_course_id"
                    label="Tanítás"
                    addNew={() => this.addNewElement('danceCourse')}
                    close={this.close}
                    options={danceCourses.map(danceCourse => (
                        <option
                            value={danceCourse.id}
                            key={danceCourse.id}
                        >
                            {`${danceCourse.id} ${this.getTeacherName(danceCourse.dance_teacher_id, danceCourse.dance_id)}`}
                        </option>
                    ))}
                />
                <FormDanceCourse
                    selected={addSelected}
                    title="danceCourse"
                    fetchFunction={this.fetchDanceCourses}
                    selectedObject={{
                        id: -1,
                    }}
                />
                <InputFormMultipleSelect
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleMultiple}
                    value={bandids}
                    name="bandids"
                    label="Zenekar"
                    addNew={() => this.addNewElement('band')}
                    close={this.close}
                    options={
                        bands.map(band => (
                            <option value={band.id} key={band.id}>
                                {band.id}
                                {' – '}
                                {band.name}
                            </option>
                        ))}
                />
                <FormBand
                    selected={addSelected}
                    title="band"
                    selectedObject={{
                        id: -1,
                    }}
                    fetchFunction={this.fetchBands}
                />
                <InputFormMultipleSelect
                    selectedForm={selectedForm}
                    form={form}
                    handleChange={handleMultiple}
                    value={djids}
                    name="djids"
                    label="DJ"
                    addNew={() => this.addNewElement('dj')}
                    close={this.close}
                    options={
                        djs.map(dj => (
                            <option value={dj.id} key={dj.id}>
                                {dj.id}
                                {' – '}
                                {dj.name}
                            </option>
                        ))}
                />
                <FormDJ
                    selected={addSelected}
                    title="dj"
                    selectedObject={{
                        id: -1,
                    }}
                    fetchFunction={this.fetchDjs}
                />
            </div>
        );
    }
}

SubFormMusicDanceCourse.propTypes = {
    selectedForm: PropTypes.string,
    form: PropTypes.string,
    dance_course_id: PropTypes.number,
    djids: PropTypes.instanceOf(Array),
    bandids: PropTypes.instanceOf(Array),
    handleChange: PropTypes.func.isRequired,
    handleMultiple: PropTypes.func.isRequired,
};

SubFormMusicDanceCourse.defaultProps = {
    selectedForm: '',
    form: '',
    dance_course_id: null,
    djids: [],
    bandids: [],
};

export default SubFormMusicDanceCourse;