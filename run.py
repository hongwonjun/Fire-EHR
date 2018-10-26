# -*- coding: utf-8 -*-
from ehr import app

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=app.config.get('SERVER_PORT', 5000))
