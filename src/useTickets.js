import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useTickets = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const dirtyTickets = localStorage.getItem("tickets");
    const _tickets = dirtyTickets ? JSON.parse(dirtyTickets) : [];
    setTickets(_tickets);
  }, []);
  const createTicket = useCallback(
    ({ intitule, description, date }) => {
      const ticket = { id: uuidv4(), intitule, description, date };
      setTickets([...tickets, ticket]);
      localStorage.setItem("tickets", JSON.stringify([...tickets, ticket]));
    },
    [tickets]
  );
  const updateTicket = useCallback(
    ({ id, ...properties }) => {
      const _tickets = tickets.map((ticket) => {
        if (ticket.id === id) {
          const _ticket = { ...ticket, ...properties };
          return _ticket;
        } else return ticket;
      });
      if (_tickets.length > 0) {
        setTickets(_tickets);
        localStorage.setItem("tickets", JSON.stringify(_tickets));
      }
    },
    [tickets]
  );
  return [tickets, createTicket, updateTicket];
};
