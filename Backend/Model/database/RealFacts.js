const { Fact } = require('./schema');

async function get83Facts(n) {
  try {
    const facts = await Fact.aggregate([{ $sample: { size: n } }]).exec(); // Call .exec() to execute the aggregation
    return facts;
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = { get83Facts };
