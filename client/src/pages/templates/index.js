import React from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../../components/DefaultLayout';
import Template1 from './Template1';
import Template2 from './Template2';


function Template () {


    const params = useParams()



    console.log(params, 'the params object')

    const getTemplate = () => {


        switch(params.id ){
            case '1':
                return <Template1 />
                break;
            case '2':
                return <Template2 />
        }


    }



    return (
        <DefaultLayout>
          
        { getTemplate() }
        </DefaultLayout>
    )


}


export default Template