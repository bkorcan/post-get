import { query as q } from 'faunadb';
import { serverClient } from '../../utils/fauna-auth';



export default async (req, res) => {
//   const { id } = req.query
//   console.log(id)
  try {

    const data = await serverClient.query(

        // q.Select("data", q.Paginate(q.Match(q.Index("get_dates_by_villa"), id)))
        q.Select("data", q.Paginate( q.Match("villa_by_name")))
    )
    res.status(200).json(data);


  } catch (e) {
    // something went wrong
    res.status(500).json({ error: e.message });
  }
};