import React, { useState } from 'react';
import Ticketing from './Ticketing';
import Ticketing2 from './Ticketing2';
import Ticketing3 from './Ticketing3';
import { useEffect } from 'react';
import { useForm } from '@inertiajs/react';

export default function TicketingMain({tickets}) {

    // console.log(tickets);

    const [page, setPage] = useState(0);
    const [selectedTicket, setSelectedTicket] = useState(tickets[0]);
    console.log(selectedTicket);
    // console.log(window.localStorage.getItem('ticket'))
    const { data, setData, post, processing, errors } = useForm({
        // name: '',
        // email: '',
        phone: '',
        line: '',
        id: ''
    });

    useEffect(() => {
        setData('id', selectedTicket.id);
    }, [selectedTicket]);

    function submit(e) {
        e.preventDefault()
        post('/ticketing')
    }

    // console.log(data);


      useEffect(() => {
        // window.localStorage.setItem('ticket', selectedTicket);
        window.localStorage.setItem('data', data);
      }, [selectedTicket]);

    const conditionalComponent = () => {
        switch (page) {
          case 0:
            return <Ticketing tickets={tickets} setSelectedTicket={setSelectedTicket} selectedTicket={selectedTicket} page={page} setPage={setPage}/>;
          case 1:
            return <Ticketing2 page={page} setPage={setPage} data={data} setData={setData} processing={processing} submit={submit}/>;
           default:
             return <Ticketing tickets={tickets} setSelectedTicket={setSelectedTicket} selectedTicket={selectedTicket} page={page} setPage={setPage}/>;
        }
      };

  return (
    <div>
        {conditionalComponent()}
    </div>
  )
}
