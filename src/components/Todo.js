import React, { useState } from 'react';

export default function Todo() {
    const [formData, submitFormData] = useState({ sno: "", note: "" });
    const [tableData, submitTable] = useState([]);

    function HandleForm(e) {
        const { name, value } = e.target;
        submitFormData({ ...formData, [name]: value });
    }

    function HandleSubmit() {
        submitTable([...tableData, formData]);
        submitFormData({
            sno: "",
            note: ""
        });
    }

    const styles = {
        container: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
        },
        header: {
            textAlign: 'center',
            color: '#333',
        },
        input: {
            width: 'calc(50% - 10px)',
            padding: '10px',
            margin: '5px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxSizing: 'border-box',
        },
        button: {
            display: 'block',
            width: '100%',
            padding: '10px',
            margin: '10px 0',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#28a745',
            color: '#fff',
            fontSize: '16px',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#218838',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
        },
        thTd: {
            padding: '10px',
            border: '1px solid #ddd',
            textAlign: 'left',
        },
        th: {
            backgroundColor: '#f1f1f1',
        },
        trEven: {
            backgroundColor: '#f9f9f9',
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Todo List</h2>
            <input name="sno" type="text" value={formData.sno} onChange={HandleForm} style={styles.input} />
            <input name="note" type="text" value={formData.note} onChange={HandleForm} style={styles.input} />
            <button style={styles.button}>Delete</button>
            <button onClick={HandleSubmit} style={styles.button} onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}>Submit</button>
            
        </div>
    );
}
