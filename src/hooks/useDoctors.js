import {useEffect} from 'react';
import {useState} from 'react';
//getting Instructors
const useDoctor=() => {
    const [doctor, setDoctor]=useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctor(data));
    }, []);
    return [doctor, setDoctor];
};

export default useDoctor;