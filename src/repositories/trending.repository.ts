import db from '../config/database-setup';

interface News {
    id?: number;
    title: string;
    status: string;
}

const create = async ({ title, status }: News): Promise<News> => {
    const query = `
        INSERT INTO
            news (title, status)
        VALUES
            ($1, $2)
        RETURNING *
    ;`;

    const result = await db.query(query, [title, status]);
    return result.rows[0];
};

const findOne = async (id: number): Promise<News | null> => {
    const query = `
        SELECT * FROM
            news
        WHERE
            id = $1
    ;`;

    const result = await db.query(query, [id]);
    return result.rows[0] || null;
};

const findAll = async (): Promise<News[]> => {
    const query = `
        SELECT * FROM
            news
    ;`;

    const result = await db.query(query);
    return result.rows;
};

const updateOne = async (id: number, { title, status }: News): Promise<News | null> => {
    const query = `
        UPDATE
            news
        SET
            title = $2,
            status = $3
        WHERE
            id = $1
        RETURNING *
    ;`;

    const result = await db.query(query, [id, title, status]);
    return result.rows[0] || null;
};

const deleteOne = async (id: number): Promise<News | null> => {
    const query = `
        DELETE FROM
            news
        WHERE
            id = $1
        RETURNING *
    ;`;

    const result = await db.query(query, [id]);
    return result.rows[0] || null;
};

export default {
    create,
    findOne,
    findAll,
    updateOne,
    deleteOne
};
