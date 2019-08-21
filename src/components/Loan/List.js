import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoans, deleteLoan } from '../../store/loan/actions';

import './List.css';

const LoanList = (props) => {

  const loans = useSelector(state => state.loan.loans);

  const dispatch = useDispatch();

  useEffect(() => {
    getLoans(dispatch);
  }, [dispatch]);

  const handleDelete = (loan) => {
    deleteLoan(loan, dispatch);
  }

  return (
    <section className="row p-4 p-md-5 mx-1 mx-md-5">
      <div className="table-responsive">
        <table className="loan-list table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Rg</th>
              <th scope="col">Emissao</th>
              <th scope="col">Órgão</th>
              <th scope="col">Sexo</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {loans.map(l =>
                <tr className="align-items-center" key={l.id}>
                  <td>{l.rg}</td>
                  <td>{l.emissao}</td>
                  <td>{l.expedidor}</td>
                  <td>{l.sexo}</td>
                  <td>
                    <button onClick={() => handleDelete(l)} className="btn btn-danger">
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
            )}

          </tbody>
        </table>
      </div>
    </section>
  );
};

export default LoanList;
